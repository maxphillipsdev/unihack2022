import axios from "axios";

// Returns age delta and priority delta
type GetRecommendation = (
  lessonScore: number,
  lessonTargetAge: number,
  currCompetency: number,
  currAge: number
) => Promise<[number, number, number]>;

const getRecommendation: GetRecommendation = async (
  lessonScore,
  lessonTargetAge,
  currCompetency,
  currAge
) => {
  const res = axios.get(
    `http://localhost:8000/recommendation?lesson_score=${lessonScore}&lesson_target_age=${lessonTargetAge}&curr_competency=${currCompetency}&curr_age=${currAge}`
  );
  console.log(res);
  const deltas: [number, number, number] = (await res).data;
  console.log(deltas);
  return deltas;
};

export default getRecommendation;
