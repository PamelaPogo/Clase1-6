import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService){}

    @Get()
    funListar(){
        return["Teclado", "Monitor"]
    }

    @Post()
    funGuardar(@Body()prod){
        return prod;
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