import { Request, Response } from 'express';

export class AuthController {
    static async registration(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'registration' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Login' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async logout(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Logout' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async refresh(req: Request, res: Response) {
        try {
            return res.status(200).json({ message: 'Refresh' });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
