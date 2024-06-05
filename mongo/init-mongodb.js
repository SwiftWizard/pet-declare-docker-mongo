
db.getSiblingDB('admin').auth(
    "admin",
    "admin"
);
db.createUser({
    user: "user",
    pwd: "user-secret-pwd",
    roles: [
     {
         role: "readWrite",
         db: "userdb"
     }
    ],
});