import random

# Case 1: higher difficulty, higher score
# Result:
#   age      --> +1
#   priority --> 

# ============================================================================ #

# Randomly generate all 4 values in their correct bounds
    # score:             [0, 1]
    # lesson_target_age: [0, 20]
    # curr_competency:   [0, 1]
    # curr_age:          [0, 20]

# Generates 1 random test input
def generate_test_input():
    score = random.random()
    lesson_target_age = random.random()
    curr_competency = random.random()
    curr_age = random.random()
    return [score, lesson_target_age, curr_competency, curr_age]

# Generate n inputs
def generate_n_tests(n):
    data = {
        "input": [],
        "output": []
    }
    for _ in range(n):
        random_input = generate_test_input()
        expected_output = get_label(random_input)
        data["input"].append(random_input)
        data["output"].append(expected_output)
    return data

# Returns tuple (age_delta, priority_delta)
similar_mark_diff = 0.05
similar_age_diff = 1
def get_label(training_input):
    diff_mark = training_input[0] - training_input[2]
    diff_age = training_input[1] - training_input[3]

    # high diff, high score      --> ( 1.00, -0.20)  increase age
    if (diff_age > similar_age_diff and diff_mark > similar_mark_diff):
        return [ 1.00, -0.20 ]

    # high diff, similar score   --> ( 0.50, -0.10)  increase age
    if (diff_age > similar_age_diff and -1*similar_mark_diff <  diff_mark < similar_mark_diff):
        return [ 1.00, -0.20 ]

    # high diff, low score       --> (-0.25,  0.05)  decrease age
    if (diff_age > similar_age_diff and diff_mark < -1 * similar_mark_diff):
        return [ -1.00, 0.20 ]

    # same diff, high score      --> ( 0.50, -0.10)  increase age
    if ((-1* similar_age_diff < diff_age < similar_age_diff) and diff_mark > similar_mark_diff):
        return [ 1.00, -0.20 ]

    # same diff, similar score   --> ( 0.00, 0.00)  -
    if ((-1* similar_age_diff < diff_age < similar_age_diff) and -1*similar_mark_diff <  diff_mark < similar_mark_diff):
        return [ 1.00, 0.20 ]

    # same diff, low score       --> (-0.50, 0.10)  decrease age
    if ((-1* similar_age_diff < diff_age < similar_age_diff) and diff_mark < -1 * similar_mark_diff ):
        return [ -1.00, 0.20 ]

    # low diff,  high score      --> ( 0.25, -0.05)  increase age
    if (diff_age < -1 * similar_age_diff and diff_mark > similar_mark_diff):
        return [ 1.00, -0.20 ]

    # low diff,  same score      --> (-0.50, 0.10)  decrease age
    if (diff_age < -1 * similar_age_diff and -1*similar_mark_diff <  diff_mark < similar_mark_diff):
        return [ -1.00, 0.20 ]

    # low diff,  low score       --> (-1.00, 0.20)  decrease age
    if (diff_age < -1 * similar_age_diff and diff_mark < -1 * similar_mark_diff):
        return [ -1.00, 0.20 ]

def sanity_tests():
     # High age
    assert(get_label([0.8, 8, 0.5, 5]) == [1, -0.2])
    assert(get_label([0.5, 9, 0.5, 7]) == [0.5, -0.1])
    assert(get_label([0.6, 8, 0.7, 6]) == [-0.25, 0.05])  # Fuck

    # Low age
    assert(get_label([0.3, 3, 0.5, 5]) == [-1, 0.2])
    assert(get_label([0.53, 3, 0.5, 6]) == [-0.5, 0.1])
    assert(get_label([0.8, 3, 0.5, 7]) == [0.25, -0.05])

    # Same age
    assert(get_label([0.8, 5, 0.5, 5]) == [0.5, -0.1])
    assert(get_label([0.5, 5, 0.5, 5]) == [0, 0])
    assert(get_label([0.3, 5, 0.5, 5]) == [-0.5, 0.1])


if __name__ == "__main__":
    import pprint
    sanity_tests()
    tests = generate_n_tests(100)
    pprint.pprint(tests)
