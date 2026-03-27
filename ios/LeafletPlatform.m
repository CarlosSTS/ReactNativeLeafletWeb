#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LeafletPlatform, NSObject)

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end
