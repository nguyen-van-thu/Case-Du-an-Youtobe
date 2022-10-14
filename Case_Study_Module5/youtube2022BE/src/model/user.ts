import { model, Schema } from "mongoose";
import { IVideo } from './video';

export interface IUser {
    googleId: string;
    familyName: string;
    password: string;
    imageUrl: string;
    listLike: IVideo;
}

const userSchema = new Schema<IUser>({
    googleId: String,
    familyName: String,
    password: String,
    imageUrl: String,
    listLike: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Videos' 
    }],
})

const User = model<IUser>("Users", userSchema);
export  {User};
