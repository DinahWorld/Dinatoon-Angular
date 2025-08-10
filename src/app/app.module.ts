import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

[
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]