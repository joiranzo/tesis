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
    mycursor.execute("SELECT conexiones.Posicion, destinos.DescrDestino FROM `conexiones`, `destinos` WHERE CodDestino=destinos.idDestino")
    myresult = mycursor.fetchall()
    
    # insertObject={}
    # columnNames=[column[0] for column in mycursor.description]
    # for record in myresult:
    #      insertObject.append(dict(zip(columnNames,record)))   
    datos={
        "rack":"AT14A",
        "pachera":1,
        "desc":"Troncal A",
        "filas":12,
        "columnas":24,
        "posiciones": dict((x,y) for x,y in myresult)
        
    
    }
    return render_template('Bandeja24.html',datospag=datos)

if __name__ == '__main__':
    app.run(debug=True)