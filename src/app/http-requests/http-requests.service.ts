import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ErrorMessageHandler } from '../../utils/ErrorHandler/error-handler.utils';

@Injectable()
export class HttpRequestsService {
  constructor(private readonly httpService: HttpService) {}

  etherApiUrl = 'api.etherscan.io';

  async getLastEtherBlock() {
    try {
      const result = await this.httpService.axiosRef.get(
        `https://${this.etherApiUrl}/api?module=proxy&action=eth_blockNumber`
      );
      const blocks10System = parseInt(result.data.result, 16)
        ? parseInt(result.data.result, 16)
        : ErrorMessageHandler('Max limit', HttpStatus.CONFLICT);
      return result;
    } catch (e) {
      console.log(e);
      ErrorMessageHandler(e.message, HttpStatus.CONFLICT);
    }
  }

  async getEtherBlock(cursor16System) {
    const response = (
      await this.httpService.axiosRef.get(
        `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${cursor16System}&boolean=true`
      )
    ).data;
    return response;
  }
}
