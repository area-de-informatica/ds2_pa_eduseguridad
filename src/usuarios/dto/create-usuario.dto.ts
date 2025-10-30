import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'test@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The unique ID from Firebase Auth',
    example: 'somefirebaseuid12345',
  })
  uid: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  nombre: string;

  @ApiProperty({
    description: 'The role of the user',
    example: 'estudiante',
  })
  rol: string;
}
