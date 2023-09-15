import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { AppService } from "../../shared/database/typeorm/repository/user-repository.adapter";
import { GetUsersQuery } from "./get-users.query";
import { User } from "~/domain/entities/user.entity";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    constructor(private readonly appService: AppService) { }

    async execute(query: GetUsersQuery): Promise<User[]> {
        return await this.appService.findAll()
    }
}