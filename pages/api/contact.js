//import { MongoClient } from "mongodb";
async function handler(req, res) {
  //let client;

  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    //stored in a database
    const newMessage = {
      email,
      name,
      message,
    };

    /*
        try{
             client = await MongoClient.connect('url');
             const db = client.db();

             try{             
                if the collection is not defines it will create it on the fly
                const result = await db.collection('message').insertOne(newMessage);
                newMessage.id = result.insertedId;
             }catch(err){
                 client.close();
                 res.status(500).json({message: err.message});
                return;
             }

        }catch(err){
           rest.status(500).json({message: err.message})
        }

        client.close();
    */
    res.status(201).json({ message: "success" });
    console.log(newMessage);
  }
}

export default handler;
