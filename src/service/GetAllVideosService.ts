import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video);

    const video = await repo.find({
      relations: ['category']
    });

    return video;
  }
}
