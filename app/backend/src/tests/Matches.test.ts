import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/Match';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test endpoint /matches', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves(
        [
          {
            "id": 1,
            "homeTeam": 16,
            "homeTeamGoals": 1,
            "awayTeam": 8,
            "awayTeamGoals": 1,
            "inProgress": false,
            "teamHome": {
              "teamName": "São Paulo"
            },
            "teamAway": {
              "teamName": "Grêmio"
            }
          },
        ] as unknown as Match[]);
  });

  afterEach(() => {
    (Match.findAll as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 200 matches', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches');

    expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('GET - Retorna matches', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches');

    expect(chaiHttpResponse.body).to.be.eql([
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
    ]);
  });
});

describe('Test endpoint /matches', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Match, "findAll")
      .throws()
  });

  afterEach(() => {
    (Match.findAll as sinon.SinonStub).restore();
  })

  it('GET - Retorna status 500 erro matches', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches');

    expect(chaiHttpResponse.status).to.be.eq(500);
  });
});
