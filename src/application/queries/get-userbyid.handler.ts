import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { AppService } from "../../shared/database/typeorm/repository/user-repository.adapter";
import { User } from "~/domain/entities/user.entity";
import { GetUserByIdQuery } from "./get-userbyid.query";

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
    constructor(private readonly appService: AppService) { }

    async execute(query: GetUserByIdQuery): Promise<User> {
        const { id } = query
        return await this.appService.findById(id)
    }
}