/**
 * Created by elporfirio on 05/09/16.
 */
(function () {
    'use strict';

    angular
        .module('tiendita')
        .controller('TiendaController', TiendaController);

    TiendaController.$inject = ['TiendaService'];

    /* @ngInject */
    function TiendaController(tiendaService) {
        var vm = this;
        vm.title = 'TiendaController';

        vm.productos = [];
        vm.producto = {
            id: null,
            name: null
        };

        vm.agregarNuevo = false;
        vm.mostrarDetalle = false;

        vm.obtenerProductos = obtenerProductos;
        vm.guardarProducto = guardarProducto;
        vm.eliminarProducto = eliminarProducto;
        vm.detalleProducto = detalleProducto;

        //Interaccion
        vm.mostrarEditar = mostrarEditar;
        vm.mostrarNuevo = mostrarNuevo;

        activate();

        ////////////////

        function obtenerProductos(){
            tiendaService.getProductos()
                .then(function(result){
                if(result.success) {
                    vm.productos = result.response.products;
                }
                })
        }

        function guardarProducto(producto){
            tiendaService.saveProducto(producto)
                .then(function(result){
                    if(result.success){
                        vm.producto.id = null;
                        vm.producto.name = null;
                        vm.agregarNuevo = false;

                        //TODO: optimizar
                        vm.obtenerProductos();
                    }
                })
        }


        function eliminarProducto(producto){
            tiendaService.deleteProducto(producto)
                .then(function(result){
                    if(result.success){
                        vm.producto.id = null;
                        vm.producto.name = null;
                        vm.agregarNuevo = false;

                        //TODO: optimizar
                        vm.obtenerProductos();
                    }
                })
        }

        function detalleProducto(producto){
            tiendaService.detailProducto(producto)
                .then(function(result){
                    if(result.success){
                        vm.producto = result.response.product;
                        vm.mostrarDetalle = true;
                    }
                });
            console.info(producto);
        }

        function mostrarNuevo(){
            vm.agregarNuevo = true;
            vm.mostrarDetalle = false;
        }

        function mostrarEditar(producto){
            vm.agregarNuevo = true;
            vm.mostrarDetalle = false;
            vm.producto = angular.copy(producto);
        }

        function activate() {
            vm.obtenerProductos();
        }
    }

})();

