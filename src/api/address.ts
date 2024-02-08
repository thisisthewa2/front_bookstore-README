import axios from 'axios';

export async function getAddress(searchWord: string, addressCurrentPage:number) {
  const params = {
    confmKey: 'U01TX0FVVEgyMDI0MDIwNjE2MDA1MTExNDQ5NjM=',
    currentPage: addressCurrentPage - 1,
    countPerPage: 15,
    keyword: searchWord,
    resultType: 'json',
  };
  let juso;
  let common;
  try {
    const response = await axios.get(`/address/addrlink/addrLinkApiJsonp.do`, {
      params: params,
    });

    const trimmedDataStr = response.data.substring(1, response.data.length - 1);
    juso = JSON.parse(trimmedDataStr).results.juso;
    common = JSON.parse(trimmedDataStr).results.common;
    return {juso, common};
  } catch (error) {
    console.error(error);
  }
}

