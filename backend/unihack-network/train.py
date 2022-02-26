import torch
from torch.autograd import Variable
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np
from network_model import RecEngine
from training_generator import *

model = RecEngine()# .cuda()
# if torch.cuda.is_available():
#     model = RecEngine().to("cuda")
        

# ------------------------------- Loading Data ------------------------------- #
# training_input    = torch.Tensor([[0.8, 8, 0.5, 5], [0.5, 9, 0.5, 7], [0.6, 8, 0.7, 7]])
# training_expected = torch.Tensor([[1, -0.2], [0.5, -0.1], [-0.25, 0.05]]) #.view(-1,1)

generated_cases = generate_n_tests(30000)
training_input = torch.Tensor(generated_cases["input"])
training_expected = torch.Tensor(generated_cases["output"])

# ---------------------------- Initialise Weights ---------------------------- #
def weights_init(model):
    for m in model.modules():
        if isinstance(m, nn.Linear):
            m.weight.data.normal_(-1, 1)

weights_init(model)

# --------------------------- Loss and Optimisation -------------------------- #
loss_func = nn.MSELoss()
optimiser = optim.Adam(model.parameters(), lr=0.1)

# --------------------------------- Training --------------------------------- #
def print_training_accuracy():
    correct_count = 0
    total = 8

    result = model(torch.Tensor([0.8, 8/20, 0.5, 5/20]))
    if (result[0] > 0 and result[1] < 0):
        correct_count += 1
    result = model(torch.Tensor([0.5, 9/20, 0.5, 7/20]))
    if (result[0] > 0 and result[1] < 0):
        correct_count += 1
    result = model(torch.Tensor([0.6, 8/20, 0.7, 6/20]))
    if (result[0] < 0 and result[1] > 0):
        correct_count += 1

    result = model(torch.Tensor([0.3, 3/20, 0.5, 5/20]))
    if (result[0] < 0 and result[1] > 0):
        correct_count += 1
    result = model(torch.Tensor([0.53, 3/20, 0.5, 6/20]))
    if (result[0] < 0 and result[1] > 0):
        correct_count += 1
    result = model(torch.Tensor([0.8, 3/20, 0.5, 7/20]))
    if (result[0] > 0 and result[1] < 0):
        correct_count += 1

    result = model(torch.Tensor([0.8, 5/20, 0.5, 5/20]))
    if (result[0] > 0 and result[1] < 0):
        correct_count += 1
    result = model(torch.Tensor([0.3, 5/20, 0.5, 5/20]))
    if (result[0] < 0 and result[1] > 0):
        correct_count += 1
    
    print("    Accuracy: {}".format(correct_count / total))

    if (correct_count / total > 0.9):
        PATH = "./network.pth"
        torch.save(model, PATH)
        exit()


epochs = 60
steps = training_input.size(0)
for i in range(epochs):
    for j, curr_input in enumerate(training_input):
        curr_label = training_expected[j]

        optimiser.zero_grad()
        output = model(curr_input)
        loss = loss_func.forward(output, curr_label)
        loss.backward()
        optimiser.step()
        
    if i % 1 == 0:
        print("Epoch: {0}, Loss: {1}, ".format(i, loss.data.numpy()))
        print_training_accuracy()

# -------------------------------- Predicting -------------------------------- #    
print("===== Predicting =====")

# result = model(torch.Tensor([0.8, 8/20, 0.5, 5/20]))
# print("{} --> [{}, {}]".format([0.8, 8, 0.5, 5], result[0], result[1]))
# print("Should be: {}".format([1, -0.2]))

# result = model(torch.Tensor([0.5, 9/20, 0.5, 7/20]))
# print("{} --> [{}, {}]".format([0.5, 9, 0.5, 7], result[0], result[1]))
# print("Should be: {}".format([0.5, -0.1]))

# result = model(torch.Tensor([0.6, 8/20, 0.7, 6/20]))
# print("{} --> [{}, {}]".format([0.6, 8, 0.7, 7], result[0], result[1]))
# print("Should be: {}".format([-0.25, 0.05]))

# result = model(torch.Tensor([0.8, 8, 0.5, 5]))
# print("{} --> [{}, {}]".format([0.8, 8, 0.5, 5], result[0], result[1]))
# print("Should be: {}".format([1, -0.2]))

# result = model(torch.Tensor([0.5, 9, 0.5, 7]))
# print("{} --> [{}, {}]".format([0.5, 9, 0.5, 7], result[0], result[1]))
# print("Should be: {}".format([0.5, -0.1]))

# result = model(torch.Tensor([0.6, 8, 0.7, 6]))
# print("{} --> [{}, {}]".format([0.6, 8, 0.7, 7], result[0], result[1]))
# print("Should be: {}".format([-0.25, 0.05]))

# result = model(torch.Tensor([0.8, 8, 0.5, 5]))
# print("{} --> [{}, {}]".format([0.8, 8, 0.5, 5], result[0], result[1]))
# print("Should be: {}".format([1, -0.2]))

# result = model(torch.Tensor([0.5, 9, 0.5, 7]))
# print("{} --> [{}, {}]".format([0.5, 9, 0.5, 7], result[0], result[1]))
# print("Should be: {}".format([0.5, -0.1]))

# result = model(torch.Tensor([0.6, 8, 0.7, 6]))
# print("{} --> [{}, {}]".format([0.6, 8, 0.7, 7], result[0], result[1]))
# print("Should be: {}".format([-0.25, 0.05]))


PATH = "./network.pth"
torch.save(model, PATH)
