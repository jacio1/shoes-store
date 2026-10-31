import { ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

const JwtModuleOptions = (config: ConfigService)

export const options: JwtModuleAsyncOptions = (): JwtModuleAsyncOptions => (
    {
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {}
    }
)  