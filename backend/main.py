from typing import Optional

from fastapi import FastAPI

import numpy as np

import torch
import network

app = FastAPI()

PATH = "./network.pth"
model = torch.load(PATH)

model.eval()                                              # Turns off autograd


def predict(lesson_score: float, lesson_target_age: float, curr_competency: float, curr_age: float) -> {}:
    # TODO replace with input
    input =  torch.Tensor(np.array([0, 0]))
    output = model(input)
    print("output = ", output.tolist())
    print("output = ", output.tolist()[0])
    return {}


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

