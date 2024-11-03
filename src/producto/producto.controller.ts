import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';

@ApiTags('CRUD API Productos')
@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService){}
    @ApiOperation({summary:'Obtener lista de productos'})
    @ApiResponse({status:200, description: 'retorna lista de productos'})
    @Get()
    funListar(){
        let productos = this.productoService.findAll()
        return productos;
    }

    @ApiOperation({summary:'Crear nuevo producto'})
    @ApiResponse({status:201, description: 'Registra un nuevo producto'})
    @Post()
    funGuardar(@Body()prod:CreateProductoDto){
        let respuesta = this.productoService.create(prod)
        return respuesta;
    }

    @Get(':id')
    funMostar(@Param('id') id){
    return "Mostrando..."+id
}

@Put(':id')
funModificarstrar(@Param('id') id, @Body() prod){
    return this.productoService.update(id,prod)
}

@Delete(':id')
funEliminar(@Param('id') id){
    return this.productoService.delete(id)
}
}