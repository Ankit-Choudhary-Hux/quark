from quark_runtime import *

import test



def go():
    _println(u"GO!");

class Test(object):
    def _init(self):
        self.name = None

    def __init__(self): self._init()

    def go(self):
        _println(u"TGO!");
