from typing import Optional

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

import numpy as np

import torch
import network_model

app = FastAPI()

PATH = "./network.pth"
model = torch.load(PATH)

model.eval()                                              # Turns off autograd

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def predict(lesson_score: float, lesson_target_age: float, curr_competency: float, curr_age: float) -> {}:
    # TODO replace with input
    input =  torch.Tensor([lesson_score, lesson_target_age, curr_competency, curr_age])
    output = model(input)
    print("output = ", output.tolist())
    l = output.tolist()

    competency_delta = 0

    if l[0] > 0:
        competency_delta = 0.1 
    if l[0] < 0:
        competency_delta = -0.1 
    
    return {
        "age_delta": l[0],
        "priority_delta": l[1],
        "competency_delta": competency_delta 
    }


@app.get("/recommendation")
def read_root(lesson_score: float, lesson_target_age:float, curr_competency: float, curr_age: float):
    """
    Parameters:
        - lesson_score
        - lesson_target_age
        - curr_competency
        - curr_age
    """

    print(lesson_score, lesson_target_age,curr_competency, curr_age)
    return predict(lesson_score, lesson_target_age,curr_competency, curr_age)
    # return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Optional[str] = None):
#     return {"item_id": item_id, "q": q}

