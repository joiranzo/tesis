from fastapi import APIRouter

empleado=APIRouter()

@empleado.get("/empleados")
def helloword():
    return "hola mundo"