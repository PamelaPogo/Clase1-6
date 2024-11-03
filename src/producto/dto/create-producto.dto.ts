import { IsNotEmpty } from "class-validator";
import { Producto } from "../producto.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto implements Producto{
    @IsNotEmpty()
    @ApiProperty({example: 'Monitor', description: 'nombre'})
    readonly nombre: string;
    @IsNotEmpty()
    @ApiProperty({example: 250.98, description: 'precio'})
    readonly precio: number;
    @IsNotEmpty()
    @ApiProperty({example: 15, description: 'cantidad'})
    readonly cantidad: number;
    @IsNotEmpty()
    @ApiProperty({example: 'Foto.jpg', description: 'imagen'})
    readonly imagen: string;
    
    readonly descripcion: string;
    
}