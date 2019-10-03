const sign = require("../../jwt");

const { comparePasswordHash } = require('../../crypto');
var md5 = require('md5')
/**
 * 
 * @param {Express} app 
 * @param {Database} db 
 */
const userModule = (app, db) => {
    app.post('/login', (req, res, next) => {
        const fakeUser = {
            username: 'admin',
            // admin1234
            password: '$2b$10$DGb4F26WsjqXOCso2xo6JemIem.HGb.yBI3fRKRwy6RbhnGpu6Q.W',
        };
        
        let p_username = req.body.username
        let p_password = req.body.password
        /*setTimeout(() => {
            sign(p_username, (err, token) => {
                res.send({
                    token,
                    message: "success"
                })
            });
        }, 2000);*/
        comparePasswordHash(p_password, fakeUser.password).then(result => {
            
            if (p_username == fakeUser.username && result) {

                setTimeout(() => {
                    sign(p_username, (err, token) => {
                        res.send({
                            ok:true,
                            token,
                            message: "success"
                        })
                    });
                }, 2000);
            } else {
                res.send({
                    ok: false,
                    message: "Username or password incorrect"
                })
            }
        })
            .catch(err => {
                res.send({
                    ok: false,
                    message: "password incorrect"
                })
            });
    });

}


module.exports = userModule;