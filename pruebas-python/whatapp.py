import pywhatkit

phone_number='+543516410439'
group_id=''
message="Prueba de whatsapp"
time_hour=10
time_minute=58
waiting_time_to_send=30
close_tab=True
waiting_time_to_close=2

mode="contact"

if mode== "contact":
    pywhatkit.sendwhatmsg(phone_number, message, time_hour, time_minute, waiting_time_to_send, close_tab, waiting_time_to_close)
    # pywhatkit.sendwhatmsg(phone_number, message, time_hour, time_minute, waiting_time_to_send, close_tab, waiting_time_to_close)
elif mode=="group":
     pywhatkit.sendwhatmsg_to_group(phone_number, message, time_hour, time_minute, waiting_time_to_send, close_tab, waiting_time_to_close)
else:
     print("Error code: 97654")
     print("*Error Message: Please seleca mode to send your uessage.")