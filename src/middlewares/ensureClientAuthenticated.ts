import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureClientAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing!"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, `${process.env.JWT_CLIENT_SECRET}`) as IPayload;

    request.id_client = sub;

    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!"
    })
  }
}