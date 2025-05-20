import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './users/usuarios.module';
import { TareasModule } from './tareas/tareas.module';
import { QuicesModule } from './quices/quices.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { EntregasModule } from './entregas/entregas.module';
import { ForosModule } from './foros/foros.module';
import { ModulosModule } from './modulos/modulos.module';
import { ArchivosModule } from './archivos/archivos.module';

@Module({
  imports: [
    UsuariosModule,
    ModulosModule,
    ArchivosModule,
    EntregasModule,
    TareasModule,
    QuicesModule,
    EvaluacionesModule,
    ForosModule,
    ConfigModule.forRoot({
    isGlobal: true,
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async () => ({
      uri: process.env.DB_URI,
    }),
    inject: [],
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}