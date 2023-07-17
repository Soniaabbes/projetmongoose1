const Contact= require ('../models/contact')
exports.addContact = async(req,res)=>{
    const{name,email}= req.body
    try { 
        const find= await Contact.findOne({email})
        if (find){ return res.status(400).send('contact already exist')}
        const contact = new Contact({name,email})
    await contact.save()
    res.status(201).send({msg:'contact created', contact})
        
    } catch (error) { res.status(500).send('error')
       
        
    }
}
exports.getAllContacts=  async(req,res)=>{
    try { const contacts= await Contact.find();
        res.status(201).send({msg:'all contacts', contacts})
        
    } catch (error) { res.status(500).send({msg:'error'})       
    }
}
exports.deleteContact= async(req,res)=>{
    const {id}=req.params
    
    try {
        await Contact.findByIdAndDelete(id)
        res.status(200).send({msg:'contact is deleted'})
    
    } catch (error) {}
        res.status(500).send({msg:'error'})}
        
        exports.updateContact= async(req,res)=>{
            const{id}=req.params;
            try { 
         const  contactUpdate = await Contact. findByIdAndUpdate(id,{$set:{...req.body}
        },{new:true})
            res.status(201).send({msg:'contact is updating', contactUpdate})
                
            } catch (error) {res.status(500).send({msg:'error'})
                
            }
        };
        exports.getOneContact=async(req,res)=>{
            const{id}=req.params;
            try {const contactOne= await Contact.findById(id)
                 res.status(201).send({msg:'one contact' , contactOne})
                
            } catch (error) { res.status(500).send({msg:'eror'})
                
            }
        }
