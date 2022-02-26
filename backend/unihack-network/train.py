import torch
from torch.autograd import Variable
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np
from network_model import RecEngine

# ------------------------------- Loading Data ------------------------------- #
training_input    = torch.Tensor([[0.8, 8, 0.5, 5], [0.5, 9, 0.5, 7], [0.6, 8, 0.7, 7]])
training_expected = torch.Tensor([[1, -0.2], [0.5, -0.1], [-0.25, 0.05]]) #.view(-1,1)

# ---------------------------- Initialise Weights ---------------------------- #
model = RecEngine()

def weights_init(model):
    for m in model.modules():
        if isinstance(m, nn.Linear):
            m.weight.data.normal_(-1, 1)

weights_init(model)

# --------------------------- Loss and Optimisation -------------------------- #
loss_func = nn.MSELoss()
optimiser = optim.SGD(model.parameters(), lr=0.0005)

# --------------------------------- Training --------------------------------- #
epochs = 1000
steps = training_input.size(0)
for i in range(epochs):
    for j, curr_input in enumerate(training_input):
        curr_label = training_expected[j]

        optimiser.zero_grad()
        output = model(curr_input)
        loss = loss_func.forward(output, curr_label)
        loss.backward()
        optimiser.step()
        
    if i % 500 == 0:
        print("Epoch: {0}, Loss: {1}, ".format(i, loss.data.numpy()))

# -------------------------------- Predicting -------------------------------- #    
print("===== Predicting =====")

result = model(torch.Tensor([0.8, 8, 0.5, 5]))
print("{} --> {}".format([0.8, 8, 0.5, 5], result))

result = model(torch.Tensor([0.5, 9, 0.5, 7]))
print("{} --> {}".format([0.5, 9, 0.5, 7], result))

result = model(torch.Tensor([0.6, 8, 0.7, 7]))
print("{} --> {}".format([0.6, 8, 0.7, 7], result))

PATH = "./network.pth"
torch.save(model, PATH)
