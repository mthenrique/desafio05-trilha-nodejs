import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    
    try {
      const turnAdm = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(turnAdm);
    } catch (err) {
      response.status(404).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
