
const Admins = [
    {
        key: 'admin1@tenant1',
        email: 'admin1@tenant1.com',
        password: 'tenant1@123',
        admin: true,
        tenant: 'tenant1',
        name: 'Admin 1'
    },
    {
        key: 'admin2@tenant2',
        email: 'admin1@tenant2.com',
        password: 'tenant2@123',
        admin: true,
        tenant: 'tenant2',
        name: 'Admin 2'
    },
    {
        key: 'admin3@tenant3',
        email: 'admin3@tenant3.com',
        password: 'tenant3@123',
        admin: true,
        tenant: 'tenant3',
        name: 'Admin 3'
    }
]
// 
const Users = [
    {
        key: 'user1@tenant1',
        email: 'user1@tenant1.com',
        password: 'tenant1@123',
        admin: false,
        tenant: 'tenant1',
        name: 'user 1'
    },
    {
        key: 'user2@tenant2',
        email: 'user2@tenant2.com',
        password: 'tenant2@123',
        admin: false,
        tenant: 'tenant2',
        name: 'user 2'
    },
    {
        key: 'user3@tenant3',
        email: 'user3@tenant3.com',
        password: 'tenant3@123',
        admin: false,
        tenant: 'tenant3',
        name: 'user 3'
    }
]
//
// DB.ref(getAdmin('admin1@tenant3'))
//     .once('value')
//     .then(snapshot => {
//         console.log('User data: ', snapshot.val());
//     });
// 

// const reference = DB.ref('/multiTenantDB/Admins/admin1@tenant1').set({
//     email: 'admin1@tenant1.com',
//     password: 'tenant1@123',
//     admin: true,
//     tenant: 'tenant1',
//     name: 'Admin 1'
// }).then(() => console.log('Data set.'));