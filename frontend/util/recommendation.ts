import axios from "axios";

// Returns age delta and priority delta
type GetRecommendation = (
  lessonScore: number,
  lessonTargetAge: number,
  currCompetency: number,
  currAge: number
) => Promise<[number, number]>;

const getRecommendation: GetRecommendation = async (
  lessonScore,
  lessonTargetAge,
  currCompetency,
  currAge
) => {
  const res = axios.get(
    `http://localhost:3000/recommendation?lesson_score=${lessonScore}&lesson_target_age=${lessonTargetAge}&curr_competency=${currCompetency}&curr_age=${currAge}`
  );
  const deltas: [number, number] = (await res).data;
  return deltas;
};

export default getRecommendation;
