import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';



export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const logged   = inject(AuthService);

  return logged.isAuthenticated();
};
