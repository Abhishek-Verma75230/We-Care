import User from "../model/user.js";





export const signupuser=  async(request,response)=>{
    try {

     const {name,username,password}=request.body;
     
     if(!username||!name||!password)
     {
        return response.status(400).json({msg:'please fill all details'});
     }
      
     const existingUser= await User.findOne({username});

     if(existingUser)
     {
        return response.status(400).json({msg:'username already exist please fill another username'});
     }

    //   const hashPassword=await bcrypt.hash(password,10);
     //    password=hashPassword;
        // const newUser=new User({name,username,password:hashPassword});
        const newUser=new User({name,username,password});
        await newUser.save();

       return response.status(200).json({msg:'signup successfull'});
    } catch (error) {
       return response.status(500).json({msg:'error when signup the user',error});
    }
}



















export const loginuser=async(request,response)=>{
   let user=await User.findOne({username:request.body.username});
      if(!user)
      {
         return response.status(400).json({msg:'username does not exist'});
        
      }
   try {
      
      // let match =await compare(request.body.password,user.password);
         if(request.body.password===user.password)
         {
            // const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRETKEY,{expiresIn:'15m'});

            //    const refreshToken=jwt.sign(user.toJSON(),process.env.RANDOM_SECRETKEY);

               // const newToken=new token({token:refreshToken});
               // await newToken.save();

               // return response.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username});
               return response.status(200).json({msg:'successfull'});

         }
         else
         {
            return response.status(400).json({msg:'password does not match'});
         }
   } catch (error) {
      return response.status(500).json({msg:'invalid credentials'});
   }

}