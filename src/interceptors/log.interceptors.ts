import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { tap } from 'rxjs';

export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    //const dt = Date.now();

    return next.handle().pipe(
      tap(() => {
        //const request = context.switchToHttp().getRequest();
        //console.log(`URL: ${request.url}`);
        //console.log(`Execução levou ${Date.now() - dt} milissegundos.`);
      }),
    );
  }
}
