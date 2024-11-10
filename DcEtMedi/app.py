from fastapi import FastAPI
from routes.empleados import empleado

app=FastAPI()

app.include_router(empleado)