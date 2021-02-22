import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import * as fetch from 'node-fetch';

@Injectable()
export class Web3Service {
  private readonly web3: Web3;
  private readonly address: string;

  constructor() {
    this.web3 = new Web3(
      'https://ropsten.infura.io/v3/8d9a1d39d9b54f039618056f6f07e7ea',
    );
    this.address = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';
  }
  async getJsonInterface() {
    return await fetch(
      'https://raw.githubusercontent.com/HvrlK/abi-contract/master/Contract.abi',
    ).then((d) => d.json());
  }
  async getLastRopstenBlock() {
    return await this.web3.eth.getBlock('latest')
  }
  async getContract() {
    return await this.getJsonInterface().then(
      (abi) => new this.web3.eth.Contract(abi, this.address),
    );
  }
  async getGroupIds() {
    return await this.getContract().then((contract) =>
      contract.methods.getGroupIds().call(),
    );
  }
  async getGroup(id: number) {
    return await this.getContract().then((contract) =>
      contract.methods.getGroup(id).call(),
    );
  }
  async getIndex(indexId: number) {
    return await this.getContract().then((contract) =>
      contract.methods.getIndex(indexId).call(),
    );
  }
}
