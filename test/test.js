const { describe, it, before } = require('mocha');
const { expect } = require('chai');
const { ethers, network, upgrades } = require('hardhat');

/*
describe('結合テスト', () => {
  let protocolAdminEOA;
  let greeterv1, greeterv2;
  before('デプロイ', async () => {
    // 署名者の取得
    [protocolAdminEOA] = await ethers.getSigners();

    //V1コントラクトのデプロイ
    const GreeterV1 = await ethers.getContractFactory("GreeterV1");
    greeterv1 = await GreeterV1.deploy();

    const GreeterV2 = await ethers.getContractFactory("GreeterV2");
    greeterv2 = await GreeterV2.deploy();

    //デプロイチェック
    await Promise.all([greeterv1.deployed(), greeterv2.deployed()]);
  });

  describe('メソッド', () => {
    it('helloV1()の戻り値確認', async () => {
      expect(await greeterv1.helloV1()).to.eql("Hello, V1 World!");
    });

    it('helloV2()の戻り値確認', async () => {
      expect(await greeterv2.helloV2()).to.eql("Hello, V2 World!");
    });
  });
});
*/