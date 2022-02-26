import torch
import torch.nn as nn
import torch.nn.functional as F

class RecEngine(nn.Module):
    def __init__(self, input_dim = 4, output_dim=2):
        super(RecEngine, self).__init__()
        self.hidden_layer = nn.Linear(input_dim, input_dim * 5)
        self.output_layer = nn.Linear(input_dim * 5, output_dim)
    
    def forward(self, x):
        x = self.hidden_layer(x)
        x = torch.tanh(x)
        x = self.output_layer(x)
        return x
