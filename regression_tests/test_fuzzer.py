from regression_tests import *
from utils.multicall import multicall_directories
from utils import constants

def test_fuzz_ec6():
    path_name = os.path.join(constants.seeds_dir, 'WebKit.JSTests.es6')
    multicall_directories(path_name, True)