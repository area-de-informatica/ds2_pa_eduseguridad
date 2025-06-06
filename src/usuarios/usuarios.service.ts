import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './schemas/usuarios.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario | null> {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Usuario | null> {
    return this.usuarioModel.findByIdAndDelete(id).exec()
  }
}
