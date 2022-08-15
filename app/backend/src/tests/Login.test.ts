import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test endpoint /login', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: "Admin",
        role: "admin",
        email: "admin@admin.com",
        password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
      } as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('POST - Retorna status 200 usuario válido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ 
        email: "admin@admin.com",
        password: "secret_admin",
    });

    expect(chaiHttpResponse.status).to.be.eq(200);
  });
  
  it('GET - Retorna status 200 usuario válido /login/validate ', async () => {
    const response = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "secret_admin",
    });

    const { token } = response.body;

    chaiHttpResponse = await chai.request(app).get('/login/validate').set('authorization', token);

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('POST - Retorna status 400 usuario inválido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ 
        email: "admin@admin.com",
    });

    expect(chaiHttpResponse.status).to.be.eq(400);
  });

  it('POST - Retorna status 401 password inválido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ 
      email: "admin@admin.com",
      password: "set_adm",
    });
    
    expect(chaiHttpResponse.status).to.be.eq(401);
  });
});

describe('Test endpoint /login', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(null);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('POST - Retorna status 401 email inválido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ 
      email: "admin.com",
      password: "secret_admin",
    });

    expect(chaiHttpResponse.status).to.be.eq(401);
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
  });
});
