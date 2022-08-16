import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/Team';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test endpoint /teams', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(
        [
          {
            "id": 1,
            "teamName": "Avaí/Kindermann"
          },
          {
            "id": 2,
            "teamName": "Bahia"
          },
        ] as Team[]);
  });

  afterEach(() => {
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 200 teams', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('GET - Retorna teams', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.body).to.be.eql([
      {
        "id": 1,
        "teamName": "Avaí/Kindermann"
      },
      {
        "id": 2,
        "teamName": "Bahia"
      },
    ]);
  });
});

describe('Test endpoint /teams', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .throws()
  });

  afterEach(() => {
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 500 erro, teams', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.eq(500);
  });
});

describe('Test endpoint /teams/:id', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findOne")
      .resolves(
        {
          "id": 1,
          "teamName": "Avaí/Kindermann"
        } as Team);
  });

  afterEach(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 200 teams/:id', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/:id');

    expect(chaiHttpResponse.status).to.be.eq(200);
  });
});

describe('Test endpoint /teams/:id', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .throws()
  });

  afterEach(() => {
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 500 erro, teams', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/:id');

    expect(chaiHttpResponse.status).to.be.eq(500);
  });
});
