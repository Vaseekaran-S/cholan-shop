import mongoose from 'mongoose';

async function connectMongo(){
    const url: string | undefined = process.env.MONGODB_URL;

    if (!url) {
        console.error('Error: MONGODB_URL environment variable is not defined');
        return;
    }
    
    try {
        await mongoose.connect(url, <Object>{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Success: MongoDB Connected');
    } catch (err: any) {
        console.error('Error: MongoDB Not Connected - ', err?.message);
    }
}

export default connectMongo;
