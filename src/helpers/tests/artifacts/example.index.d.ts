/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from "mongoose";

declare module "mongoose" {

interface UserFriend {uid: User["_id"] | User;
nickname?: string;
_id: mongoose.Types.ObjectId;
}

type UserObject = User

type UserQueries = {
populateFriends: <Q extends mongoose.Query<any, UserDocument>>(this: Q) => Q;
}

interface Query<ResultType, DocType extends Document> extends UserQueries {}

type UserMethods = {
isMetadataString: (this: UserDocument) => boolean;
}

type UserStatics = {
getFriends: (this: UserModel, friendUids: UserDocument["_id"][]) => Promise<UserObject[]>;
}

interface UserModel extends mongoose.Model<UserDocument>, UserStatics {}

type UserSchema = mongoose.Schema<UserDocument, UserModel>

interface User {
email: string;
firstName: string;
lastName: string;
metadata?: any;
bestFriend?: mongoose.Types.ObjectId;
friends: UserFriend[];
city: {
coordinates?: number[];
};
socialMediaHandles?: Map<string, string>;
arrayOfMaps: (Map<string, number>)[];
_id: mongoose.Types.ObjectId;
}

type UserFriendDocument = mongoose.Types.EmbeddedDocument & {
uid: UserDocument["_id"] | UserDocument;
nickname?: string;
_id: mongoose.Types.ObjectId;
}

type UserDocument = mongoose.Document<mongoose.Types.ObjectId> & UserMethods & {
email: string;
firstName: string;
lastName: string;
metadata?: any;
bestFriend?: mongoose.Types.ObjectId;
friends: mongoose.Types.DocumentArray<UserFriendDocument>;
city: {
coordinates?: mongoose.Types.Array<number>;
};
socialMediaHandles?: mongoose.Types.Map<string>;
arrayOfMaps: mongoose.Types.Array<mongoose.Types.Map<number>>;
_id: mongoose.Types.ObjectId;
name: string;
}

}
