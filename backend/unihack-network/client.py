import torch
import network_model

PATH = "./network.pth"
model = torch.load(PATH)
print("===== Predicting =====")
