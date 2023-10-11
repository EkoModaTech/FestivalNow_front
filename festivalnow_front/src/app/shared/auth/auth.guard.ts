import { inject } from "@angular/core"
import { AuthService } from "../service/auth.service"
import { Router } from "@angular/router"

export const AuthGuard = () => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if(authService.isLogged){
        return true
    }

    return router.parseUrl("/login")

} 