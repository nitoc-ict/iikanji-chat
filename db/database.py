import sqlite3

postId = 0
getId = (0,)
dbname = "log.db"
conn = sqlite3.connect(dbname)
cur = conn.cursor()

def createTable():
    cur.execute("CREATE TABLE IF NOT EXISTS log(id,message, reaction)")
    cur.execute("INSERT INTO log VALUES (?,?,?)",(0,"Beginning Of Table.",0))
    conn.commit()

def postMessage(text: str):
    cur.execute("SELECT MAX(id) FROM log")
    getId = cur.fetchone()
    postId = getId[0] + 1
    cur.execute("INSERT INTO log VALUES (?,?,?)", (postId,text,0))
    conn.commit()

def reaction(id: int):
    cur.execute("UPDATE log SET reaction = reaction+1 WHERE id = ?", (id,))
    conn.commit()

createTable()
postMessage("yabasugi")
reaction(1)
#cur.execute("select max(id) from log")
#print(cur.fetchone())

conn.close()