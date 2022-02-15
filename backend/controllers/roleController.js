import role from "../models/role.js";
// Registrar roles en la base de datos
const registerRole = async(req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data"});

    //  se crea un nuevo esquema que contiene la info de models/role
    let schema = new role({
        name: req.body.name,
        description: req.body.description,
        dbStatus: true
    });
    let result = await schema.save();
    
    if(!result) return res.status(500).send({message: "Failed to register role"});
    res.status(200).send({result});
};

export default { registerRole };
