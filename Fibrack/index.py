# Usaremos flask
from  flask import Flask, render_template
import mysql.connector

app=Flask(__name__)

mydb=mysql.connector.connect(
    host="localhost",
    user="root",
    database="Fibrack"
)


@app.route('/')

def home():
    
    mycursor = mydb.cursor()
    mycursor.execute("SELECT origenes.Descripcion, conexiones.Posicion, destinos.DescrDestino FROM `origenes`,`conexiones`, `destinos` WHERE CodDestino=destinos.idDestino and CodOrigen=origenes.idOrigen")
    myresult = mycursor.fetchall()
    
    datos={
        "rack":"AT14A",
        "pachera":1,
        "desc":"Troncal A",
        "filas":12,
        "columnas":24,
        "posiciones": dict((x,y,z) for x,y,z in myresult)
    }

    mydb.close
    return render_template('Bandeja24.html',datospag=datos)

if __name__ == '__main__':
    app.run(debug=True)