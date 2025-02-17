import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { GraphqlModule } from './graphql/graphql.module';
import { SessionModule } from './modules/session/session.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AssetsStorageModule } from './modules/assets-storage/assets-storage.module';
import { CategoryModule } from './modules/category/category.module';
import { PingModule } from './modules/ping/ping.module';
import { SearchUserModule } from './modules/search-user/search-user.module';
import { UserAvatarModule } from './modules/user-avatar/user-avatar.module';
import { GlobalSearchModule } from './modules/global-search/global-search.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SearchGenerateModule } from './modules/search_models_params_gen/search_generate.module';
import { FindAssetsByFilterModule } from './modules/find-assets-by-filter/find-assets-by-filter.module';
@Module({
  imports: [
    SearchGenerateModule,
    GraphqlModule,
    SessionModule,
    AuthModule,
    ProfileModule,
    AssetsStorageModule,
    CategoryModule,
    PingModule,
    SearchUserModule,
    UserAvatarModule,
    GlobalSearchModule,
    FindAssetsByFilterModule
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}