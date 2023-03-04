export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-MX',
    {
        style: 'currency',
        currency: 'MXN'
    })
}